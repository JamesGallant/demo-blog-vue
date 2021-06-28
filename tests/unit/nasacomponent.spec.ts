import { shallowMount } from "@vue/test-utils";
import NasaComponent from "@/components/NasaComponent.vue";

test("NasaComponent.vue displays text from props in DOM", () => {
    const contentProp = "Some text via prop"
    const wrapper = shallowMount(NasaComponent, {
        propsData:  {
            content: contentProp
        }
    });

    expect(wrapper.text()).toContain(contentProp)
})