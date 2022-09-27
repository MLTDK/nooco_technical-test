import React from 'react';

class Emission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoaded: false
        }
    }

    getNames() {
        fetch('http://127.0.0.1:4200/names')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })
    }
}

export default Emission;
