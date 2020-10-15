import Form from './Form.vue';
import FormControl from './FormControl.vue';
import FormField from './FormField.vue';
import Breadcrumber from './Breadcrumber.vue';

export { FormControl, FormField, Form, Breadcrumber };

export function install(Vue) {
  Vue.component(FormControl.name, FormControl);
  Vue.component(Form.name, Form);
  Vue.component(FormField.name, FormField);
  Vue.component(Breadcrumber.name, Breadcrumber);
}
