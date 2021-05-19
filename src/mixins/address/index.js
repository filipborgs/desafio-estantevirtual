import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("address", []),
  },

  computed: {
    ...mapState("address", { address: "address" }),
  },
};
