import React    from 'react'
import Button   from 'react-bootstrap/Button';
import Col      from 'react-bootstrap/Col';
import Row      from 'react-bootstrap/Row';



export default function A( props ) {

    const { player , notes , message } = props;
    
    function handleNoteClick( aNote ) {
        player( [ aNote ] , .2 );
    };



    return (
        <Col>
            <Row>
                <Col>
                    <Button 
                        variant='dark' 
                        onClick={ ( ) => { player( notes , .07 ) } }
                        >
                        { message }
                    </Button>
                </Col>
            </Row>
            <br />
            <Row>
                {
                    notes
                    ?
                    <Col
                        style={ { 
                            fontSize : '.8rem' ,
                            cursor : 'pointer' ,
                        } } 
                        >
                        <Row>
                            <Col>
                                name
                            </Col>                            
                            <Col>
                                frequency
                            </Col>                            
                            <Col>
                                wavelength
                            </Col>
                        </Row>

                        { 
                        notes.map( ( a , b ) => ( 
                        <Row 
                            key={ b + 'note' } 
                            onClick={ ( ) => { handleNoteClick( a ); } }
                            >
                            { a.map( ab => ( 
                            <Col key={ ab + 'as' } >
                                { ab }
                            </Col> 
                            ) ) }
                        </Row> 
                        ) )
                        }
                    </Col>
                    :
                    <Col>
                    </Col>
                }
            </Row>
        </Col>
    )
};