import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'flexboxgrid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Task = {
  id: number;
  name: string;
  finished: boolean;
  edit: boolean;
};

const taskList = [
  {
    id: 1,
    name: 'iztīri māju',
    finished: true,
    edit: false,
  },
  {
    id: 2,
    name: 'nopērc pienu',
    finished: false,
    edit: false,

  },
  {
    id: 3,
    name: 'uztaisi vakariņas',
    finished: false,
    edit: false,

  },
];

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [filtered, setFiltered] = useState('all');
  const [tempEditValue, setTempEditValue] = useState('');
  const [allowEdit, setAllowEdit] = useState(false);
  const [AAAA, SetAAAA] = useState(false);
  const inputEl = useRef(null);
  const inputEl2 = useRef(null);
  const isInitialMount = useRef(true);
  

  useEffect(() => {
    // @ts-ignore
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // @ts-ignore
      inputEl2.current.focus();
    }
  }, [AAAA]);
  
  useEffect(() => {
    const todosStorage = localStorage.getItem('taskList');
    if (todosStorage){
      const storage:Task[] = (JSON.parse(todosStorage));
      if (storage.length > 0) {
        const newStorage = [...storage];
        storage.forEach((el, i)=>{
          newStorage[i].edit = false;
        } );
        setTasks(newStorage);
      } else {
        setTasks(taskList);
      } 
    } else {
      setTasks(taskList);
    }

  }, []);
  

  useEffect(() => {
    // console.log('Komponents ir apdeitojies');
    localStorage.setItem('taskList', JSON.stringify(tasks));

  }, [tasks]);

  const buttonClickHandler = () => {
    if (inputTask !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: inputTask,
          finished: false,
          edit: false,
        },
      ]);
      setInputTask('');
      // @ts-ignore
      inputEl.current.focus();
      setErrorMessage(' ');
      toast('note added');
    } else {
      setErrorMessage('you need to write something in input');
    }
  };

  const deleteHandle = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  
  const finishedChangeHandler = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].finished = !newTasks[index].finished;
    setTasks(newTasks);
  };
  

  const cancelNoteHandle = (index: number) => {
    const newTasks = [...tasks]; 
    newTasks[index].edit = !newTasks[index].edit;
    setTasks(newTasks);
    setAllowEdit(false);
  };
  const copyNoteHandler = (index: number) => {
    const newTasks = [...tasks];
    const newTask = {
      id: Date.now(),
      name: newTasks[index].name,
      finished: newTasks[index].finished,
      edit: newTasks[index].edit,
    };
    newTasks.push(newTask);
    setTasks(newTasks);
  };

  const editInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setTempEditValue(e.target.value);

  };
                                    
  const noteEditHandle = (index: number) => {
    const newTasks = [...tasks];
    setTempEditValue(newTasks[index].name);
    newTasks[index].edit = !newTasks[index].edit;
    setTasks(newTasks);
    SetAAAA(!AAAA);
    // @ts-ignore
    // setTimeout(() => {  inputEl2.current.focus(); }, 1000);
    setAllowEdit(true);
  };
  const saveEditNoteHandler = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].name = tempEditValue;
    newTasks[index].edit = !newTasks[index].edit;
    setTasks(newTasks);
    setAllowEdit(false);
  };
  return (
    <div className="container ">
      <div className={`row ${allowEdit && 'background'}`} />
      <div className="todo-app">
        <div className="row">
          <div className="col-xs-5">
            <input
              className="todo-app__input"
              type="text"
              value={inputTask}
              onChange={inputChangeHandler}
              ref={inputEl}
            />
            <span style={{ color:'red' }}>{errorMessage}</span>
          </div>
          <div className="col-xs-4">
            <div className="todo-app__button-wrapper">
              <button
                type="button"
                onClick={buttonClickHandler}
                className="todo-app__button todo-app__button--add"
              >
                {' '}
                Add task
              </button>
            </div>
          </div>
        </div>
  
        <br />
           
        <div className="button-wrapper">
          <div className="row">
            <div className="col-xs-3">
              <button
                type="button"
                className={`todo-app__button todo-app__button--all ${
                  filtered === 'all' && 'todo-app__button--all--pressed'
                }`}
                onClick={() => setFiltered('all')}
              >
                {' '}
                VISI
              </button>
            </div>
            <div className="col-xs-3">
              <button
                type="button"
                className={`todo-app__button todo-app__button--finished ${
                  filtered === 'finished' &&
                  'todo-app__button--finished--pressed'
                }`}
                onClick={() => setFiltered('finished')}
              >
                {' '}
                IZDARĪTIEs
              </button>
            </div>
            <div className="col-xs-3">
              <button
                type="button"
                className={`todo-app__button todo-app__button--unfinished ${
                  filtered === 'unfinished' &&
                  'todo-app__button--unfinished--pressed'
                }`}
                onClick={() => setFiltered('unfinished')}
              >
                {' '}
                NEIZDARĪTIE
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />

     
        {tasks.map(({ edit, name, finished, id }, index) => (
          (((filtered ==='unfinished' && !finished) || (filtered ==='finished' && finished)|| (filtered ==='all')) && 
          <div className="row" key={id}>
            {!edit ? (
              <>
                <div className="col-xs-5">
                  <div className="todo-app__task">
            
                    <label
                      className={`todo-app__text ${
                        finished && 'todo-app__text--checked'
                      }`}
                      htmlFor={index.toString()}
                    >
                      <input
                        type="checkbox"
                        className="todo-app__checkbox"
                        checked={finished}
                        onChange={() => finishedChangeHandler(index)}
                        id={index.toString()}
            
                      />
                      {name} {index}
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="todo-app__button-wrapper">
                    <button
                      type="button"
                      className="todo-app__button"
                      onClick={() => noteEditHandle(index)}
                    >
                      Rediģēt
                    </button>
                    <button
                      type="button"
                      className="todo-app__button todo-app__button--delete"
                      onClick={() => deleteHandle(index)}
                    >
                      Izdzēst
                    </button>
                    <button type="button" className="todo-app__button" onClick={() => copyNoteHandler(index)}>
                      Copy
                    </button>
                  </div>
                </div>
               
              </>
            ) : (
              <>
                <div className={`col-xs-5 ${allowEdit && 'showInput'}`}>
                  <input
                    className="todo-app__input"
                    type="text"
                    value={tempEditValue}
                    ref={inputEl2}
                    onChange={(e) => editInputHandler(e, index)}
                  />
                </div>
                <div className={`col-xs-4 ${allowEdit && 'showInput'}`}>
                  <div className="todo-app__button-wrapper">
                    <button
                      type="button"
                      className="todo-app__button todo-app__button--save"
                      onClick={() => saveEditNoteHandler(index)}
                    >
                      saglabāt
                    </button>
                    <button
                      type="button"
                      className="todo-app__button todo-app__button--cancel"
                      onClick={() => cancelNoteHandle(index)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>)
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
export default TodoApp;
// AINAS IDEJAS:
// pievienot tasku - ok
// redzēt - ok
// ieķeksēt ja ir izdarīts
// izdzēst
// rediģēt
// nokopēt
