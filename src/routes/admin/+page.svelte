<script>
</script>

<form action="login">
  <label
    for="admin"
  >
    Admin:
    <input
      type="username"
      name="username"
      id="username"
    >
  </label>
  <label
    for="password"
  >
    Password:
    <input
      type="password"
      name="password"
      id="password"
    >
  </label>

  <input
    type="submit"
    name="submit"
    id="submit"
  >
</form>

<style>
  label {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 0.5em;
  }
  input[type=username],
  input[type=password],
  input[type=submit] {
    padding: 12px 20px;
    margin: 8px 0;
  }
</style>
