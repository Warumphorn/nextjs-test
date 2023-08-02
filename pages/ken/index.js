
export default function Ken(props) {
    return (
        <div>
            <div>{props.text} - {props.testset}</div>
            <div> Warumphorn </div>
        </div>
    )
}


function SwitchExample() {
    return (
      <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check // prettier-ignore
          disabled
          type="switch"
          label="disabled switch"
          id="disabled-custom-switch"
        />
      </Form>
    );
  }
