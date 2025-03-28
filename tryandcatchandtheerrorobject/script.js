try {
  console.log(reet)
  throw new ReferenceError("Reet is not good")
} catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}