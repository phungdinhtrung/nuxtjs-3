## middleware

Sử dụng để định nghĩa các middleware cho router.

-| middleware/
---| auth.ts

Usage: In page file, you can reference this route middleware

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>