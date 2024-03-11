module.exports = {
    // Other configurations...
  
    module: {
      rules: [
        // Other rules...
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };