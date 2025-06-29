/**
 * @func 就地编辑
 * @params {id, parent 父节点, value 默认值}
 * 
 */

function EditInPlace(id,parent,value)
{
    this.id=id;
    this.parent=parent || document.body;
    this.value=value || '这个家伙很懒，什么都没有留下';
    this.createElement(this.id);
}
EditInPlace.prototype.createElement=function(id){

    // <div id="ep1"></div>
   this.containerElement=document.createElement('div');
    this.containerElement.id=this.id;
    this.parent.appendChild(this.containerElement);

    this.staticElement = document.createElement('span')
    this.staticElement.innerText=this.value;
    this.containerElement.appendChild(this.staticElement);
}
