# Oryx

Oryx is a frontend framework based on [React](https://github.com/facebook/react/) and [EmotionJS](https://github.com/emotion-js/emotion) that will help you build amazing websites with your own branding.

- **Customizable**: The framework exposes an API which will take a `theme.js` file that will allow you to generate reusable components with your custom branding.
- **Responsive Websites**: The framework will also provide you with responsive behavior for your website
- **Ease-of-use**: The framework also comes with some *out of the box* themes to get you started with your website

## Todo

- [x] Scaffolding of the project; `Typescript`, `React`, `EmotionJS`, `Webpack`
- [ ] Develop Button Component
- [ ] Turn it into a monorepo
- [ ] Install `storybook` and test the components
- [ ] Add responsive behavior
- [ ] Write Unit tests
- [ ] Expose API to take custom theme
- [ ] Add an *out of the box* theme; Everything from colors to breakpoints and spacing
- [ ] Documentation

## Things to do in Button Component

- [x] Create basic component
- [x] Create a generic interface so that user can add their own interfaces
- [x] Module setup, expose Button as a named export and also part of Oryx
- [x] Refactor code
- [ ] Install storybook and test the component

## Examples

## Random Thoughts

### Approaches

#### Theme Provider Approach

##### Thoughts:

- Will have to maintain a themeProvider on an app basis which provides a context to all the components
- I am not making a reusable app
- I am making a reusable component with plugin themes
- ON the contrary, if I use themeProvider then they will need to pass the theme(in a strict manner), but I can avoid Unnecessary helpers
- Props can still be of the type solid, outline, link, disabled,
- Theme file will have to be well defined

---

#### Theme Approach


##### Thoughts:
- Will have to make the user define the theme file in a strict way
- Need to add all colors as primary
- props can be of this manner - solid, outline, link, disabled
- color props will be of this manner - primary={color}

---

Conclusion, 1st is a straightgorward approach, let's try that