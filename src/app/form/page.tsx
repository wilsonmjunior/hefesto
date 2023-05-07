export default function Page() {
  async function onSave() {
    'use server';
    console.log('onSave')
  }

  return (
    <form
      action={onSave}
      className="border rounded-xl p-10 m-10"
    >
      <button
        type="submit"
        className="p-2 rounded-lg text-white bg-gray-600 hover:bg-gray-400 "
      >
        Save
      </button>
    </form>
  );
}

// const TWO_MINUTES = 2 * 60;
// next: { tags: ['posts'], revalidate: TWO_MINUTES }

// revalidateTag('posts')
// redirect('/posts')
