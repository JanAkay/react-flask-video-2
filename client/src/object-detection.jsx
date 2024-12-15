<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Object Detection</title>
  <h1>Upload Video for Object Detection</h1>
  <form action="/detect" method="post" encType="multipart/form-data">
    <label htmlFor="file">Select video file:</label>
    <input type="file" id="file" name="file" accept=".mp4" required="" />
    <br />
    <br />
    <fieldset>
      <legend>Select object classes to detect:</legend>
      <input type="checkbox" id="person" name="object_class" defaultValue={0} />
      <label htmlFor="person">Person</label>
      <br />
      <input type="checkbox" id="car" name="object_class" defaultValue={2} />
      <label htmlFor="car">Car</label>
      <br />
      <input
        type="checkbox"
        id="traffic_light"
        name="object_class"
        defaultValue={9}
      />
      <label htmlFor="traffic_light">Traffic Light</label>
      <br />
      <input type="checkbox" id="truck" name="object_class" defaultValue={7} />
      <label htmlFor="truck">Traffic Light</label>
      <br />
      <input
        type="checkbox"
        id="bicycle"
        name="object_class"
        defaultValue={1}
      />
      <label htmlFor="bicycle">Bicycle</label>
      <br />
      <input
        type="checkbox"
        id="motorbike"
        name="object_class"
        defaultValue={3}
      />
      <label htmlFor="motorbike">Motorbike</label>
      <br />
      <input type="checkbox" id="bus" name="object_class" defaultValue={5} />
      <label htmlFor="bus">Bus</label>
      <br />
      <input type="checkbox" id="train" name="object_class" defaultValue={6} />
      <label htmlFor="train">Train</label>
      <br />
      <input
        type="checkbox"
        id="fire_hydrant"
        name="object_class"
        defaultValue={10}
      />
      <label htmlFor="fire_hydrant">Fire Hydrant</label>
      <br />
      <input
        type="checkbox"
        id="stop_sign"
        name="object_class"
        defaultValue={11}
      />
      <label htmlFor="stop_sign">Stop Sign</label>
      <br />
      <input type="checkbox" id="bird" name="object_class" defaultValue={14} />
      <label htmlFor="bird">Bird</label>
      <br />
      <input type="checkbox" id="cat" name="object_class" defaultValue={15} />
      <label htmlFor="cat">Cat</label>
      <br />
      <input type="checkbox" id="dog" name="object_class" defaultValue={16} />
      <label htmlFor="dog">Dog</label>
      <br />
      <input type="checkbox" id="horse" name="object_class" defaultValue={17} />
      <label htmlFor="horse">Horse</label>
      <br />
      <input type="checkbox" id="sheep" name="object_class" defaultValue={18} />
      <label htmlFor="sheep">Sheep</label>
      <br />
      <input type="checkbox" id="cow" name="object_class" defaultValue={19} />
      <label htmlFor="cow">Cow</label>
      <br />
      <input
        type="checkbox"
        id="elephant"
        name="object_class"
        defaultValue={20}
      />
      <label htmlFor="elephant">Elephant</label>
      <br />
      <input type="checkbox" id="bear" name="object_class" defaultValue={21} />
      <label htmlFor="bear">Bear</label>
      <br />
      <input type="checkbox" id="zebra" name="object_class" defaultValue={22} />
      <label htmlFor="zebra">Zebra</label>
      <br />
      <input
        type="checkbox"
        id="giraffe"
        name="object_class"
        defaultValue={23}
      />
      <label htmlFor="giraffe">Giraffe</label>
      <br />
      <input
        type="checkbox"
        id="umbrella"
        name="object_class"
        defaultValue={25}
      />
      <label htmlFor="umbrella">Umbrella</label>
      <br />
      <input
        type="checkbox"
        id="suitcase"
        name="object_class"
        defaultValue={28}
      />
      <label htmlFor="suitcase">Suitcase</label>
      <br />
      <input
        type="checkbox"
        id="snowboard"
        name="object_class"
        defaultValue={31}
      />
      <label htmlFor="snowboard">Snowboard</label>
      <br />
      <input
        type="checkbox"
        id="sports_ball"
        name="object_class"
        defaultValue={32}
      />
      <label htmlFor="sports_ball">Sports Ball</label>
      <br />
      <input type="checkbox" id="kite" name="object_class" defaultValue={33} />
      <label htmlFor="kite">Kite</label>
      <br />
      <input
        type="checkbox"
        id="baseball_bat"
        name="object_class"
        defaultValue={34}
      />
      <label htmlFor="baseball_bat">Baseball Bat</label>
      <br />
      <input
        type="checkbox"
        id="skateboard"
        name="object_class"
        defaultValue={36}
      />
      <label htmlFor="skateboard">Skateboard</label>
      <br />
      <input
        type="checkbox"
        id="bottle"
        name="object_class"
        defaultValue={39}
      />
      <label htmlFor="bottle">Bottle</label>
      <br />
      <input type="checkbox" id="cup" name="object_class" defaultValue={41} />
      <label htmlFor="cup">Cup</label>
      <br />
      <input
        type="checkbox"
        id="banana"
        name="object_class"
        defaultValue={46}
      />
      <label htmlFor="banana">Banana</label>
      <br />
      <input type="checkbox" id="apple" name="object_class" defaultValue={47} />
      <label htmlFor="apple">Apple</label>
      <br />
      <input
        type="checkbox"
        id="laptop"
        name="object_class"
        defaultValue={63}
      />
      <label htmlFor="laptop">Laptop</label>
      <br />
      <input
        type="checkbox"
        id="cell_phone"
        name="object_class"
        defaultValue={67}
      />
      <label htmlFor="cell_phone">Cell Phone</label>
      <br />
      <input type="checkbox" id="book" name="object_class" defaultValue={73} />
      <label htmlFor="book">Book</label>
      <br />
      <legend>Select processing device:</legend>
      <input
        type="radio"
        id="gpu"
        name="use_gpu"
        defaultValue={1}
        defaultChecked=""
      />
      <label htmlFor="gpu">GPU</label>
      <br />
      <input type="radio" id="cpu" name="use_gpu" defaultValue={0} />
      <label htmlFor="cpu">CPU</label>
      <br />
    </fieldset>
    <br />
    <input type="submit" defaultValue="Detect Objects" />
  </form>
</>
