import { object, string, number, date } from "yup";

let userSchema = object({
  name: string("fill name please").required(),
  age: number().required().positive("อายุเป็นเลขบวกดิ").integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

let data = {
  name : '',
  age: -22,
  email : 'n@true'
 }

 userSchema.validate(data, {abortEarly : false}).then( rs => {
  console.log(rs)
 }).catch(err => {
  // console.log('*** Error ***')
  // console.log(err.name)
  // console.log(err.message)
  // console.log(err.value)
  // // console.log(err.path)
  // // console.log(err)
  // console.log(err.errors)
  // console.log(err.inner)
 })