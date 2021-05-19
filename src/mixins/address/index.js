import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("address", ["saveAddress"]),
  },

  computed: {
    ...mapState("address", { address: "address", addresses: "addresses" }),
  },
};
