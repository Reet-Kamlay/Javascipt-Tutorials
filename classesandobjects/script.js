class RailwayForm {
  submit() {
    alert(this.name + ": Your form submitted is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
  fill(givenname, trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}
let harryForm = new RailwayForm()
harryForm.fill("Harry", 145316)
let rohanForm = new RailwayForm()
rohanForm.fill("Rohan", 222420)
harryForm.submit()
harryForm.submit()
rohanForm.cancel()