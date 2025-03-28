class RailwayForm{
  constructor(givenname,trainno,address){
    console.log("CONSTRUCTOR CALLED..."+givenname+" "+trainno)
    this.name=givenname
    this.trainno=trainno
    this.address=address
  }
  preview(){
    alert(this.name+": Your form is for train number: "+this.trainno+" and your address is "+this.address)
  }
  submit(){
    alert(this.name+": Your form is submitted for train number: "+this.trainno)
  }
  cancel(){
    alert(this.name+": This form is cancelled for train number: "+this.trainno)
    this.trainno=0
  }
}
let HarryForm=new RailwayForm("Harry",12324,"Jharkhand")
HarryForm.preview()
HarryForm.submit()
HarryForm.cancel()
HarryForm.preview()
