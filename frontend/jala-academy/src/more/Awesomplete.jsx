// import React from 'react';

// import Select from 'react-select';
// import { colourOptions } from './docs/data';

// export default () => (
//   <Select
//     defaultValue={[colourOptions[2], colourOptions[3]]}
//     isMulti
//     name="colors"
//     options={colourOptions}
//     className="basic-multi-select"
//     classNamePrefix="select"
//   />
// );
























// import React from "react";


// class Awesomplete extends React.Component {
//     constructor(props) {
//       super(props);
//       this.input = React.createRef();
//     }
  
//     componentDidMount() {
//       new Awesomplete('input[data-multiple]', {
//         filter: function(text, input) {
//           return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
//         },
      
//         item: function(text, input) {
//           return Awesomplete.ITEM(text, input.match(/[^,]*$/)[0]);
//         },
      
//         replace: function(text) {
//           var before = this.input.value.match(/^.+,\s*|/)[0];
//           this.input.value = before + text + ", ";
//         }
//       });
//       console.log(this.props);
//     }
  
//     render() {
//       return (
//         <input data-list="CSS, JavaScript, HTML, SVG, ARIA, MathML" data-multiple />
        
//       );
//     }
//   }

//   export default Awesomplete;