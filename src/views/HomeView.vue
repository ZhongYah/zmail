<template>
  <div>
    <FilterMails/>
    <MailDrop/>
    <WriterDraft/>
  </div>
</template>

<script>
import MailDrop from "../components/MailDrop.vue";
import FilterMails from "../components/FilterMails.vue";
import WriterDraft from "../components/WriterDraft.vue";

export default {
  name: "home",
  components: {
    MailDrop,
    WriterDraft,
    FilterMails
  }
};
</script>