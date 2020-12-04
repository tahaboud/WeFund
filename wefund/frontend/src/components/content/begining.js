import React, { Component, component } from 'react';
import Footer from './Footer';
import Part1 from './begining/Part1';
import Part2 from './begining/Part2';
import Part3 from './begining/Part3';
import Part4 from './begining/Part4';
import Part5 from './begining/Part5';
import Part6 from './begining/Part6';
import Part7 from './begining/Part7';
class Begining extends Component {
    state = {
        users: []
    }

    render() {
        // const users=this.state.users
        return (
            <div>
                <Part1 />
                <Part2 />
                <Part3 />
                <Part4 />
                <Part5 />
                <Part6 />
                <Part7 />





            </div>








        );
    }
}
export default Begining;