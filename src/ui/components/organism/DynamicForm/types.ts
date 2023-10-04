type ComponentTypes = "input";

export interface FormComponent {
  type: ComponentTypes;
  label: string;
}

export interface DynamicFormProps {
  components: FormComponent[];
}
