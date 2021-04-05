import React    from 'react'
import Button   from 'react-bootstrap/Button';
import Col      from 'react-bootstrap/Col';
import Row      from 'react-bootstrap/Row';



export default function A( props ) {

    const { player , notes , message } = props;

    return (
        <Col>
            <Row>
                <Col>
                    <Button variant='dark' 
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
                    style={ { fontSize : '.8rem' } } >
                        <Row>
                        <Col>
                                name
                            </Col>                            <Col>
                                frequency
                            </Col>                            <Col>
                                wavelength
                            </Col>
                        </Row>
                        { 
                        notes.map( ( a , b ) => ( <Row>{ a.map( ab => ( <Col>{ ab }</Col> ) ) }</Row> ) )
                        }
                    </Col>
                    :
                    <Col>
                    </Col>
                }
            </Row>
        </Col>
    )
}