


const Car = ({name , price , type,image}: any) => {
  return (
    <>
    <div className="text-center">
    <h3 className="font-bold">{name}</h3>
    <p className="text-sm text-muted-foreground">{price}</p>
    <Badge variant={"default"}>{type}</Badge>
    <img src={image} alt="some data image here" className="mx-auto mt-4"/>
  </div>
  </>
  )
}

export default Car;
