//which receives it as props
export default function MyComponent(props) {
  console.log(props); /* =>
      {
          header: "Hi Mom",
          type: "primary",
          number: 3,
          data: [1, 2, 3],
          status: {
              loading: false,
              message: "not there yet",
          },
      }
      */
}
