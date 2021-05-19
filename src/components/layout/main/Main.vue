<template>
  <b-card>
    <b-row>
      <b-col>
        <h3 class="card-title">
          <slot name="title"></slot>
        </h3>
      </b-col>
      <b-col cols="2">
        <slot name="actions"></slot>
      </b-col>
    </b-row>

    <b-card-text class="pt-2">
      <b-container>
        <slot name="body"></slot>
      </b-container>
    </b-card-text>

    <div class="card-footer">
      <div class="text-center">
        <slot name="footer"></slot>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {};
</script>

<style></style>
