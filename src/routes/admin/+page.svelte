<script lang="ts">
  import type { ActionData } from './$types';

  interface Props {
    form: ActionData;
  }

  let { form }: Props = $props();

  let imageUrl = $state('');
  let imageError = $state(false);

  $effect(() => {
    if (form?.imageUrl) imageUrl = form.imageUrl;
  });
</script>

<div class="page">
  <div class="card">
    <h1>Add a Post</h1>

    <form method="post" action="?/addPost">

      {#if form?.success}
        <p class="banner success">Post added successfully!</p>
      {/if}
      {#if form?.incorrect}
        <p class="banner error">Incorrect passphrase. Your data has been preserved.</p>
      {/if}
      {#if form?.missing}
        <p class="banner warning">Please fill in all required fields.</p>
      {/if}

      <label for="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={form?.title ?? ''}
          required
        />
      </label>

      <label for="content">
        Content
        <textarea
          name="content"
          id="content"
          rows="7"
          required
        >{form?.content ?? ''}</textarea>
      </label>

      <label for="imageUrl">
        Image URL
        <input
          type="url"
          name="imageUrl"
          id="imageUrl"
          value={imageUrl}
          oninput={(e) => {
            imageUrl = (e.target as HTMLInputElement).value;
            imageError = false;
          }}
        />
      </label>

      {#if imageUrl}
        <div class="preview">
          <img
            src={imageUrl}
            alt="Preview"
            onerror={() => imageError = true}
            onload={() => imageError = false}
          />
          {#if imageError}
            <p class="field-error">Could not load image — check the URL.</p>
          {/if}
        </div>
      {/if}

      <label for="imageAlt">
        Image alt text
        <input
          type="text"
          name="imageAlt"
          id="imageAlt"
          value={form?.imageAlt ?? ''}
        />
      </label>

      <label for="slug">
        Slug
        <input
          type="text"
          name="slug"
          id="slug"
          value={form?.slug ?? ''}
          required
        />
      </label>

      <label for="description">
        Description
        <input
          type="text"
          name="description"
          id="description"
          value={form?.description ?? ''}
        />
      </label>

      <label for="passphrase">
        Passphrase
        <input
          type="password"
          name="passphrase"
          id="passphrase"
          required
        />
      </label>

      <button type="submit">Publish Post</button>

    </form>
  </div>
</div>

<style>
  .page {
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
  }

  @media screen and (min-width: 50em) {
    .page {
      min-width: 700px;
    }
  }

  .card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 14px;
    padding: 2rem;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: #3C4142;
    margin: 0 0 1.5rem;
    letter-spacing: -1.2px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: #3C4142;
  }

  input,
  textarea {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.6rem 0.8rem;
    font-family: inherit;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    color: #3C4142;
    background: #fafafa;
    transition: border-color 150ms, outline 150ms;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid #dba831;
    outline-offset: 2px;
    border-color: transparent;
    background: white;
  }

  textarea {
    resize: vertical;
  }

  .preview {
    margin-top: -0.25rem;
  }

  .preview img {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
    border-radius: 8px;
    display: block;
  }

  .field-error {
    margin: 0.4rem 0 0;
    font-size: 0.85rem;
    color: #f31628;
  }

  .banner {
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    margin: 0;
    font-weight: 600;
  }

  .banner.error {
    background: #fff0f0;
    border: 1px solid #f31628;
    color: #f31628;
  }

  .banner.warning {
    background: #fffbee;
    border: 1px solid #dba831;
    color: #b08425;
  }

  .banner.success {
    background: #f0fff4;
    border: 1px solid #38a169;
    color: #276749;
  }

  button[type="submit"] {
    background: #f31628;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    margin-top: 0.5rem;
    transition: filter 150ms;
  }

  button[type="submit"]:hover {
    filter: brightness(0.9);
  }
</style>
