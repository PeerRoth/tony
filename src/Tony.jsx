import React , { useEffect, useState } from 'react'
import { Row , Col , Container , Button , Form } from 'react-bootstrap'
import * as Tone from 'tone'
import A from './components/a.jsx'
import Z from './components/z.jsx'

const hexest = [
    'f72585' ,
    'b5179e' ,
    '7209b7' ,
    '560bad' ,
    '480ca8' ,
    '3a0ca3' ,
    '3f37c9' ,
    '4361ee' ,
    '4895ef' ,
    '4cc9f0'
];
                
let anOctaveOfDiatonicNotes = [
    ['E4'	        , 329.63 ,	104.66  ] ,
    ['F4'	        , 349.23 ,	98.79   ] ,
    ['F#4/Gb4' 	    , 369.99 ,	93.24   ] ,
    ['G4'	        , 392.00 ,	88.01   ] ,
    ['G#4/Ab4' 	    , 415.30 ,	83.07   ] ,
    ['A4'	        , 440.00 ,	78.41   ] ,
    ['A#4/Bb4' 	    , 466.16 ,	74.01   ] ,
    ['B4'	        , 493.88 ,	69.85   ] ,
    ['G4'	        , 392.00 ,	88.01   ] ,
    ['E4'	        , 329.63 ,	104.66  ] ,
    ['F#4/Gb4' 	    , 369.99 ,	93.24   ] ,
    ['G4'	        , 392.00 ,	88.01   ] ,
    ['G#4/Ab4' 	    , 415.30 ,	83.07   ] ,
    ['F4'	        , 349.23 ,	98.79   ] ,
    ['A4'	        , 440.00 ,	78.41   ] ,
    ['A#4/Bb4' 	    , 466.16 ,	74.01   ] ,
    ['B4'	        , 493.88 ,	69.85   ] ,
    ['G4'	        , 392.00 ,	88.01   ] ,
    ['E4'	        , 329.63 ,	104.66  ] ,
];




let sumNotez = [
    ['E4'	        , 329.63 ,	104.66  ] ,
    ['F4'	        , 349.23 ,	98.79   ] ,
    ['F#4/Gb4' 	    , 369.99 ,	93.24   ] ,
    ['G4'	        , 392.00 ,	88.01   ] ,
    ['B4'	        , 493.88 ,	69.85   ] ,
    ['G4'	        , 392.00 ,	88.01   ] ,
    ['E4'	        , 329.63 ,	104.66  ] ,
];

sumNotez = [
    ...sumNotez ,
    ...( sumNotez.map( n => [ n[ 0 ] , n[ 1 ] - 80 , n[ 2 ] ] ) )
]



function Bar( props ) {
    return ( <div style={ { 
                position        : 'fixed'   ,
                left            : props.lt  ,
                height          : props.ht  ,
                width           : '10px'    ,
                backgroundColor : 'yellow'  ,
                margin          : '0px'     ,
                display         : 'inline'  ,
                fontSize        : '.8rem'   ,
            } }
            >.
        </div> )
}


















export default function Tony( props ) {

    const { setBar } =                  props;
    const [ wantBars        , setWantBars       ] = useState( false );
    const [ bars            , setBars           ] = useState( false );
    const [ barState        , setBarState       ] = useState( { } );
    const [ het             , setHet            ] = useState( 10 );
    const [ beg             , setBeg            ] = useState( hexest[ 0 ] );
    const [ noteDuration    , setNoteDuration   ] = useState( .5 );

    useEffect( ( ) => {
        setBarState( hexest.map( h => false ) )
    } , [ ] );
    
    async function playNote( m ) {
        const synth = new Tone.AMSynth( ).toDestination( );
            // console.log( 'array uv notes' )
            m.forEach( ( a , b ) => {
                // console.log( a.n )
                setHet( a.n )
                let round = Math.round( a.n / 100 );
                // console.log( round )
                setBeg( hexest[ round ] )
                setBar( a.n );
                let tempBarState = [ ...barState ]
                tempBarState[ b ] = true;
                setBarState( tempBarState )
                let res = synth.triggerAttackRelease( a.n , a.o  , a.p )
                // console.log( res.frequency.input.input.value )
            } )
    }


    function plodeThing( ) {
        console.log( 'upload it' )
    };


    function handleNoteDurationAdjustment( evurnt ) {
        console.log( evurnt )
        if ( parseInt( evurnt.target.value ) ) {
            setNoteDuration( parseInt( evurnt.target.value ) )
        }
    };


    function playShit( passedArray , duracione ) {
        const now =         Tone.now( );
        let duration =      typeof duracione !== 'undefined' ? duracione : .75;
        let transcribed =   passedArray.map( (  x , y ) => ( 
                                { 
                                    n : x[ 1 ].toFixed( 0 ) , 
                                    o : duration , 
                                    p : y === 0 ? now : ( now + ( duration * y * 1.1 ) ) 
                                }
                            ) );
        playNote( transcribed );
    }





    function handleBarClick( ev ) {
        ev.target.style.setProperty( 'backgroundColl' )
    };



    const [ xState , setXState ] = useState( 1 );
    const [ yState , setYState ] = useState( 1 );

    function changeX( ) {
        setXState( Math.ceil( Math.random( ) * 5 ) ) 
    };

    useEffect( ( ) => {
        setInterval( ( ) => { changeX( ) } , 1800 );
    } , [ ] );

    const dim = 80;


    return (
        <Container>



            {/* <Row 
                style={ { 
                    position    : 'fixed' , 
                    top         : '0px' , 
                    left        : '0px' , 
                    width       : '100vw' , 
                    backgroundColor : 'yellow' , 
                    height      : '120px' 
                } } 
                >
                { hexest.map( ( a , b ) => {
                let margs = 5;
                let viewWidth = window.innerWidth;
                let barWidth = ( ( viewWidth - ( margs * 2 ) ) / ( hexest.length + 1 ) ) + margs / 2;
                return (
                <Col
                    onClick={ handleBarClick }
                    style={ { 
                        height : '100px' , position : 'fixed' , top : '10px' ,
                        width :  barWidth - 3 , backgroundColor : '#' + a , 
                        left : barWidth * b + margs , opacity : barState[ a ] ? 1 : .2 
                    } }
                >
                </Col>
                )
                } ) }
            </Row> */}

            <Row style={ { marginTop : '120px' } }>
                <Col>
                <br />


               

                    <Row style={ { 
                        position : 'relative' ,
                        zIndex : 9999 ,
                    } }
                    >

                    {/* <Button onClick={ changeX }>hitDat</Button> */}
            {/* {
            sumNotez.map( ( x , y ) => {
            let top =   y * 40 * xState;
            let left =  y * 60 * yState;
            return (
            <Z
                key={ y + 'noteyboat' }
                player={ playShit }
                notey={ x }
                message={ x[ 0 ] }
                stylo={ {
                    position : 'absolute' ,
                    top : top ,
                    left : left ,
                    width : '50px' ,
                    height : '50px' ,
                    borderRadius : '20px' ,
                    cursor : 'pointer' ,
                    backgroundColor : `hsl(${ xState * y * 20 }deg 50% 50%)` ,
                    overflow : 'hidden' ,
                } }
            />
            )
            } )
        } */}

<Col>
{
[0,1,2,3,4,5]
.map( ( a , b ) => {

    return (
        <Row 
            style={ { 
                minHeight : '2px' ,
            } }
            key={ b + 'hiTr' } >
            {
            sumNotez.map( ( x , y ) => {
            // let top =   y * 40 * xState;
            let top =   dim * b;
            let left =  y * dim * yState;

            return (

            <Z
                size={ 2 }
                key={ y + 'noteyboat' }
                player={ playShit }
                notey={ x }
                message={ x[ 0 ] }
                stylo={ {
                    zIndex : 999999 ,
                    position : 'absolute' ,
                    top : top ,
                    left : left ,
                    // width : '50px' ,
                    height : dim ,
                    // height : '50px' ,
                    // borderRadius : '20px' ,
                    padding : '1rem' ,
                    cursor : 'pointer' ,
                    backgroundColor : `hsl(${ xState * y * 20 }deg ${ ( b + 1 ) * 20 }% ${ ( b + 1 ) * 10 }%)` ,
                    overflow : 'hidden' ,
                } }
            />
            )
            } )
        }
        </Row>
    ) } ) }
</Col>

</Row>


                    {/* <Row>
                        <A player={ playShit }
                            notes={ anOctaveOfDiatonicNotes }
                            message={ 'e-g-b-g' }
                        />
                    </Row> */}


                        {/* {
                        wantBars
                        ?
                        <div
                        style={ { width : '90vw' } }>
                            {
                            bars.map( ( a , b ) => {
                                return (
                        <Bar
                            key={ 'bar' + b }
                            lt={ b * 10 }
                            ht={ a.n }
                            />
                            )
                        } )
                    }
                    </div>
                    :
                    <></>
                    } */}

                    {/* <Row>
                        <Col
                            style={ { padding : '3rem' } }>

                            <Button onClick={ playShit } >set Dat { typeof noteDuration !== 'undefined' ? noteDuration : '' }</Button>
                                                
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>note duration</Form.Label>
                                    <Form.Control
                                        name='dure'
                                        onChange={ handleNoteDurationAdjustment } 
                                        type="text" placeholder="1 , 1.2 , 01.20 , etc . .  .   ." 
                                    />
                                </Form.Group>
                            </Form>

                        </Col>
                    
                    </Row> */}




                    {/* <Row>
                        <Col>
                        </Col>
                        <Col>
                    
                        <Form>
                            <Form.Group>
                                <Form.File 
                                id="exampleFormControlFile1" 
                                label="SoundPloder" />
                            </Form.Group>
                        </Form>

                        <Button
                            onClick={ plodeThing } >
                            putFile
                        </Button>

                        </Col>
                        <Col>
                        </Col>
                        
                    </Row> */}








                </Col>
            </Row>
        </Container>
    )




}