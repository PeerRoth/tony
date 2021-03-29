import React , { useState } from 'react'
import { Row , Col , Container , Form } from 'react-bootstrap'
import * as Tone from 'tone'
import A from './components/a.jsx'

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
                    ]

                    
let anOctaveOfDiatonicNotes = [
    ['E4'	        , 329.63 ,	104.66 ]    ,
    // ['F4'	        , 349.23 ,	98.79 ] ,
    // ['F#4/Gb4' 	, 369.99 ,	93.24 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    // ['G#4/Ab4' 	, 415.30 ,	83.07 ] ,
    // ['A4'	        , 440.00 ,	78.41 ] ,
    // ['A#4/Bb4' 	, 466.16 ,	74.01 ] ,
    ['B4'	        , 493.88 ,	69.85 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['E4'	        , 329.63 ,	104.66 ]    ,
    // ['F4'	        , 349.23 ,	98.79 ] ,
    // ['F#4/Gb4' 	, 369.99 ,	93.24 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    // ['G#4/Ab4' 	, 415.30 ,	83.07 ] ,
    // ['A4'	        , 440.00 ,	78.41 ] ,
    // ['A#4/Bb4' 	, 466.16 ,	74.01 ] ,
    ['B4'	        , 493.88 ,	69.85 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['E4'	        , 329.63 ,	104.66 ]    ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['E4'	        , 329.63 ,	104.66 ]    ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['E4'	        , 329.63 ,	104.66 ]    ,
    ['F4'	        , 349.23 ,	98.79 ] ,
    // ['F#4/Gb4' 	, 369.99 ,	93.24 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['G#4/Ab4' 	, 415.30 ,	83.07 ] ,
    ['A4'	        , 440.00 ,	78.41 ] ,
    ['A#4/Bb4' 	, 466.16 ,	74.01 ] ,
    ['B4'	        , 493.88 ,	69.85 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['E4'	        , 329.63 ,	104.66 ]    ,
    ['F4'	        , 349.23 ,	98.79 ] ,
    // ['F#4/Gb4' 	, 369.99 ,	93.24 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    // ['G#4/Ab4' 	, 415.30 ,	83.07 ] ,
    // ['A4'	        , 440.00 ,	78.41 ] ,
    // ['A#4/Bb4' 	, 466.16 ,	74.01 ] ,
    ['B4'	        , 493.88 ,	69.85 ] ,
    ['G4'	        , 392.00 ,	88.01 ] ,
    ['C5'	        , 523.25 ,	65.93 ] ,
    // ['C#5/Db5' 	, 554.37 ,	62.23 ] ,
    ['D5'	        , 587.33 ,	58.74 ] ,
    // ['D#5/Eb5' 	, 622.25 ,	55.44 ] ,
    ['E5'	        , 659.25 ,	52.33 ] 
    ];




export default function Tony( props ) {


    const { setBar } =                  props;
    var [ wantBars , setWantBars ] =    useState( false )
    var [ bars , setBars ] =            useState( false )
    var [ het , setHet ] = useState( 10 )
    var [ beg , setBeg ] = useState( hexest[ 0 ] )
    // const [ bar , setBar ] = useState( 0 );
    
    async function playNote( m ) {
        const synth = new Tone.AMSynth( ).toDestination( );
        if ( !Array.isArray( m ) ) {      
        // let promiseNote = await Tone.start( );
            console.log( 'PLAYINGN SINGLEL NOTE' )
            let res = synth.triggerAttackRelease( m.n , m.o );
            console.log( res )
        } else {
            console.log( 'array uv notes' )
            // let now = Tone.now( );
            m.forEach( ( a , b ) => {
                console.log( a.n )
                setHet( a.n )
                let round = Math.round( a.n / 100 );
                console.log( round )
                setBeg( hexest[ round ] )
                setBar( a.n )
                let res = synth.triggerAttackRelease( a.n , a.o  , a.p )
                console.log( res.frequency.input.input.value )
            } )
        // Tone.Unit.Time/
        }
    }


    function playShit( passedArray ) {
        const now = Tone.now( )
     

    let duration = .175;
    let transcribed = passedArray.map( (  x , y ) => {
        return (

            { n : x[ 1 ].toFixed( 0 ) , o : duration , p : y === 0 ? now : (now + ( duration * y * 1.1 )) }
            // { n : x[ 1 ].toFixed( 0 ) , o : .4 , p : y === 0 ? now : now + ( .4 * y ) }

        )
    } )
    
        playNote( transcribed )
       
        // playNote( bars ) 
        }


        function Bar( props ) {
            return (

                <div
                    style={ { 
                        position        : 'fixed'    ,
                        left            : props.lt   ,
                        height          : props.ht      ,
                        width           : '10px'       ,
                        backgroundColor : 'yellow'      ,
                        margin          : '0px' ,
                        display         : 'inline' ,
                        fontSize        : '.8rem'
                    } }
                    >.
                </div>

            )
        }
        // const player = new Tone.Player({
        //     url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
        //     autostart: true,
        // });
        // const filter = new Tone.Filter(400, 'lowpass').toDestination();
        // const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
        // connect the player to the feedback delay and filter in parallel
        // player.connect(filter);
        // player.connect(feedbackDelay);
    return (
        <Container>

            <Row>
                <Col>
                <br />

                    <Row>
                        <A player={ playShit }
                            notes={ anOctaveOfDiatonicNotes }
                            message={ 'e-g-b-g' }
                        />

                        
                    </Row>


                    <Row>
                        <Col>
                            <div
                                style={ {
                                    position : 'fixed' ,
                                    top : '200px' ,
                                    left : '40px' ,
                                    backgroundColor : beg ,
                                    width : '150px' ,
                                    height : ( het / 5 ) + 'px'

                                } } >

                                </div>
                        </Col>
                    </Row>


                    {/* <Row>
                        <Col> */}
                        {
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


                            }
                    
                    
                        {/* </Col>
                    </Row> */}



                    <Row>
                        <Col>
                    
                        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

                        </Col>
                    
                    </Row>




                    <Row>
                        <Col>
                    
                    
                        </Col>
                    
                    </Row>




                    <Row>
                        <Col>
                    
                    
                        </Col>
                    
                    </Row>




                    <Row>
                        <Col>
                    
                    
                        </Col>
                    
                    </Row>




                    <Row>
                        <Col>
                    
                    
                        </Col>
                    
                    </Row>









                </Col>
            </Row>
        </Container>
    )




}