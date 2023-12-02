import './App.css';
import GetAPIdata from './GetAPIdata';
import Classcompo from './Classcompo';
import PropsEx1 from './PropsEx1';
import State from './State';
import Ex1 from './UseState';
import Usestate from './Nested-obj-task';
import ColorChange from './UseState2';
import Form from './Usestate3'
import UseRefHook from './UseRefHook'
import Ref from './UseRef2';
import UserTable from './TableUsingFilter';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>

    <h1>Hello REact </h1>
    <p>this is para</p>
    {/* <GetAPIdata/>
    <Classcompo/>
    <PropsEx1 />
    <State/>
    <Ex1/> */}
    <ColorChange/>
    {/* <Usestate/>
    <Form/>
    <UseRefHook/>
    <Ref/>
    <UserTable/>
    <Table/> */}

   </>
  );
}

export default App;
