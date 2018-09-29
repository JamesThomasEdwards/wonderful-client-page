# Instructions

***PLEASE READ ENTIRE README FOR DETAILS***

Navigate to the frontend-dev-assessment directory
``` 
cd wonderful-client-page 
```

From the wonderful-client-page directory

```
npm i
```

Build

```
npm run build
```

Start the dev server

```
npm run dev-server
```

Go to http://localhost:8080/ 

### For testing

```
npm run test -- --watchAll
```

## Containers => components + Jest => test

Containers and components are named accordingly. I included an animation property in some of the stateful containers with the hopes to add some animation to the shapes. I'd love to see them spin on their axis on a click. You'll also find a test fold in there too. The only thing to test were snapshots and initial state for the containers that had them. Also, I was going to attempt to make columns for the bottom left set of shapes

## Shapes

I think I spent the most time on this; in fact, way too much time. So these shapes are 2 equilateral triangels put together. My initial approach was taking a rectangle and skew the X and Y axis, but that will never give you that double equilateral triangle. I ended up using clip-path and making polygons. I was able to rotate them and stick in the images nicely. The only issue is, since the width and height are are diagonal, you need to be careful with viewport sizing. I'm very curious on another approach; I'm still not sold that this was the best one.
