import React,{Component, component} from 'react';
import Footer    from './Footer';

import Part14   from './event/Part1';
import Part15   from './event/Part2';
import Part16   from './event/Part3';





class Content extends Component{
    state={
        users:[]
    }
  
    render(){
       // const users=this.state.users
        return(
            <div>
                 <Part1 />
                 <Part2 />
                 <Part3 />
                 <Part4/>
                 <Part5/>
                 <Part6/>
                 <Part7/>

               
                 
               
                
            </div>
               
    

            
            



        );
    }
}
export default Content;