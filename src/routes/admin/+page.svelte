<script>
</script>

<form
  method="post"
  action="?/addPost"
>
  <h1>Add a Post</h1>
  <label
    for="title"
  >
    Title:
    <input
      type="text"
      name="title"
      id="title"
    >
  </label>

  <label
    for="content"
  >
    Content:
    <textarea
      name="content"
      id="content"
      rows="7"
    ></textarea>
  </label>

  <label
    for="imageUrl"
  >
    Image url:
    <input
      type="url"
      name="imageUrl"
      id="imageUrl"
    >
  </label>

  <label
    for="imageAlt"
  >
    Image alt:
    <input
      type="url"
      name="imageAlt"
      id="imageAlt"
    >
  </label>

  <label
    for="slug"
  >
    Slug:
    <input
      type="text"
      name="slug"
      id="slug"
    >
  </label>

  <label
    for="description"
  >
    Description:
    <input
      type="text"
      name="description"
      id="description"
    >
  </label>

  <label
    for="passphrase"
  >
    Passphrase:
    <input
      type="password"
      name="passphrase"
      id="passphrase"
    >
  </label>

  <input
    type="submit"
    name="submit"
    id="submit"
  >
</form>

<style>
  h1 {
    text-align: center;
  }
  label {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
  }
  form {
    width: 90svw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 0.5em;
  }
  input[type=text],
  input[type=url],
  input[type=password],
  input[type=submit],
  textarea {
    padding: 12px 20px;
    margin: 4px 0;
  }

</style>
