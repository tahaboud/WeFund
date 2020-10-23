import React,{Component, component} from 'react';
import Footer    from './Footer';
import Part1    from './begining/Part1';
import Part2    from './begining/Part2';
import Part3    from './begining/Part3';
import Part4    from './begining/Part4';
import Part5    from './begining/Part5';
import Part6    from './begining/Part6';
import Part7    from './begining/Part7';
import Part8    from './signUp/Part1';
import Part9    from './signUp/Part2';
import Part10   from './signUp/Part3';
import Part11   from './signUp/Part4';
import Part12   from './signUp/Part5';
import Part13   from './signUp/Part6';
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
                 <Part8/>
                 <Part9/>
                 <Part10/>
                 <Part11/>
                 <Part12/>
                 <Part13/>
                 
               
                
            </div>
               
    

            
            



        );
    }
}
export default Content;