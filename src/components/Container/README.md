Container is a versatile wrapper element that is rendered if configured (through its props) and ignored thus rendering just its children if not configured.
This component has several built-in, convience props that are primarily focused on styling and laying out elements.

The intended use for this container is two-fold:
- to wrap other components in this library thus allowing for an easy and consistent implementation of its props separate from the component, itself, and therefore easier to implement and maintain without conflicting styles
- to allow developers to easily add layout-related elements without having to create one-off styles and classes just to position a particular element

### Margin

There's a powerful margin system built into Container that allows for:
- using Local's set increments of margin 'sizes'
- basic addition and subtraction formulas for complex cases
- shorthand and individual properties forms

> note: margin is applied directly to the components `style` prop which makes it great for quick, one-off variations and bad for repeatable margin patterns as well as being able to override those margins

The following example shows how to use Container to add margin around an element in shorthand vertical / horizontal form:

```js
<Container margin="m s xl">
	<Card>
    	Hello margin shorthand!
    </Card>
</Container>
```

It's equally as easy to add individual margin props.

```js
<Container marginLeft="xl">
	<Card>
    	Hello individual <strong>marginLeft</strong> property!
    </Card>
</Container>
```

These margin props can also handle simple plus / minus arithmatic for both shorthand and individual margin properties.

```js
<Container margin="xl+xl -s xl-15 m">
	<Card>
    	Hello basic arithmatic!
    </Card>
</Container>
```

### The element prop

By default, when the container is set to render, its container element tag will be of type `div`. 
If however, you want to use a custom tag, it's as easy as passing a string to the `element` prop:

```js
<Container element="span" >
	<button>
		I am a button
	</button>
</Container>
```

In more complex situations, you may even need the container element to set one or more props.
In this case, you can pass the `element` prop a full React element:

```js
<Container 
	element={<span style={{display: 'inline-block'}} />}
	margin="xl-1"
>
	<button>
		I am a button
	</button>
</Container>
```
