# semantic-headings

A React utility for dynamically generating headings with the correct semantic order.

## Getting started

This library exports two react components (`H` and `SemanticSection`) that use the Context API to dynamically generate and maintain heading levels based on nested sections.

```
import { H, SemanticSection } from 'semantic-headings';

// renders <h1>Hello World</h1>
<H>Hello World</H> 

// renders <h2>Hello World</h2>
<SemanticSection> 
  <H>Hello World</H> 
</SemanticSection>

// renders an h1, h2, h3
<H>Hello World</H>
## Getting started
  <H>Hello World</H>
  <SemanticSection> 
    <H>Hello World</H> 
  </SemanticSection>
</SemanticSection>
```

## Advanced usage

### Section Elements

By default the `SemanticSection` component does not render it's own element to the dom. However a component or element can be passed to the component using the `element` prop. Any additional props and refs passed to the component will be forwarded to that element. 

```
<SemanticSection element="div"> 
  <H>Hello World</H> 
</SemanticSection>

// renders 
<div>
  <h2>Hello World</h2>
</div>
```

### Override Level

If you want to override the automatically generated level. You can do so using the `level` prop.

```
<H level={6}>Hello World</H> // <h6>Hello World</h6>
```