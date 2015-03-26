//component for notable objects
  //selectable custom tag and unique IDs
var notableObj = React.createClass({
  // getInitialState: function(){
  //   return {};
  // },
  positioning: function(){
    var offsetLeft = $('customClickedDiv').offset().left;
    var offsetTop = $('customClickedDiv').offset().top;
    var width = $('customClickedDiv').width();
    var height = $('customClickedDiv').height();

    var placement = {
      top: offsetTop,
      left: offsetLeft + width
    }

    return placement;
  },
  annotationPopUp: function(){
    //render annotation component
      //render annotation component to the body using jsx
        //you need to pass along the positioning as a prop so that you have access to it in the annotation comp
  },
  render: function(){
    return (
      <eventableTag onClick={this.annotationPopUp, this.position}>{this.props.innerHTML}</eventableTag>;
    )
  }

})

//component for annotations
var annotationComp = React.createClass({

  render: function(){
    //render a custom div to the side of the tag.
    return (
      <div class='annotationPopUp' top={this.props.top} left={this.props.left}></div>
    )
  }
})


//toolbar if we have time

$('click a certain thing').click(function(e){
  console.log(e.pageX, e.pageY) //grabs the position of the mouse
})