Bookstore API - App Identifier: ICdrMoc3QWfCoBTeaTuc

{
  "1": [
    {
      "category": "Technology",
      "author": "Matthew Ball",
      "title": "The Metaverse"
    }
  ],
  "2": [
    {
      "category": "Fiction",
      "author": "Margaret Atwood",
      "title": "My Evil Mother"
    }
  ],
  "3": [
    {
      "title": "Scars and Stripes",
      "category": "Sports",
      "author": "Tim Kennedy"
    }
  ]
}

const books = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      books: action.payload,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});
