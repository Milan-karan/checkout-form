<template>
    <div>
      <h1>test</h1>
        <form-wizard @on-complete="onComplete">
            <tab-content title="Personal details"
                         icon="ti-user">
              Step 1
            </tab-content>
            <tab-content title="Additional Info"
                         icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              step 3
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


export default {
    components: {
      FormWizard,
      TabContent
    },
    methods: {
      onComplete: function() {
        alert('Done!')
      }
    }
}
</script>

