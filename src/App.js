import Card from "./Components/Card";

function App() {
  return (
    <div className="App" style={{ margin: '50px' }}>
      {/* How to create components */}
      <Card
        action={[
          <div style={{ display: 'flex', gap: '10px' }}
          >
            <button>Edit</button>
            <button>Send</button>
          </div>
        ]}
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4> Product Name </h4>
            <h5> 522.2 RS</h5>
          </div>
        }
        bordred={false}
        style={{ width: '300px' }}
        cover={
          <img src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
        }
      >
        <p>
          Compiled successfully!
          You can now view card-app in the browser.
          Local:            http://localhost:3000
          On Your Network:  http://192.168.1.100:3000
          Note that the development build is not optimized.
          To create a production build, use yarn build.
        </p>
      </Card>
      <br />
      <Card title="Card Title is Awesome!2" bordred={true} style={{ width: '250px' }} >
        <p>
          Compiled successfully!
          You can now view card-app in the browser.
          Local:            http://localhost:3000
          On Your Network:  http://192.168.1.100:3000
          Note that the development build is not optimized.
          To create a production build, use yarn build.
        </p>
      </Card>
    </div >
  );
}
export default App;
