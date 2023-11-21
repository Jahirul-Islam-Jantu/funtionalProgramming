// Local Scope

// Global Scope
const a = 10;
function mostOuter() {
  function outer() {
    console.log(a);
  }
}

// Block Scope
// Lexical Scope
{
  const scoped = "scoped";
  {
    {
      {
        {
          console.log(scoped);
        }
      }
    }
  }
}

const notScoped = "Not Scoped";
{
  {
    {
      {
        {
          console.log(scoped);
        }
      }
    }
  }
}
