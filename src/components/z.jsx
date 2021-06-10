import React    from 'react'
import Button   from 'react-bootstrap/Button';
import Col      from 'react-bootstrap/Col';
import Row      from 'react-bootstrap/Row';



export default function Z( props ) {

    const { 
        player  ,
        notey   , 
        message ,
        stylo   ,
    } = props;
    


    function handleNoteClick( aNote ) {
        player( [ aNote ] , .2 );
    };

// console.log( props.size );

    return (
        <Col
            xs={ typeof props.size !== 'undefined' ? props.size : 'auto' }
            style={ stylo }
            onClick={ ( ) => { handleNoteClick( notey ); } }
            >
            <Row>
                <Col
                    style={ { 
                        fontSize    : '.8rem'   ,
                        cursor      : 'pointer' ,
                        width       : '80px'    ,
                        // border : '2px solid white' ,
                    } } 
                    >
                    <Row 
                        key={ ( Math.random( ) * 100 ) + 'note' } 
                        >
                        <Col
                            style={ {
                                width : '80px' ,
                            } } 
                            key={ ( Math.random( ) * 100 ) + 'as' } >
                            { message  }
                            {/* { Array.isArray( notey ) ? notey.join( ' * ' ) : notey } */}
                        </Col> 
                    </Row> 
                </Col>
            </Row>
        </Col>
    )
};