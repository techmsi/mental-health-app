// Therapist: Displays props being passed in.



export default class Therapist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props;

    return (
      <section>
        <p>Thank you for choosing a therapist.</p>
        <h3>{params.name}</h3>
        <p> will be contacted on your behalf.</p>
      </section>
    );
  }
}
