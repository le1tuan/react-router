import React from 'react'
import {Link} from 'react-router' 
export default React.createClass({
 render() {
    return (
    <div>
      Repos
<Link to="/repos/reactjs/react-router">React Router</Link>
<Link to="/repos/facebook/react">React</Link>
</div>

    )
  }
})