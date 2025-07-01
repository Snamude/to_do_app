import React, { useEffect, useState } from 'react'
import cate1 from '../../assets/cate-1.png'
import cate2 from '../../assets/cate-2.png'
import cate3 from '../../assets/cate-3.png'
import cate4 from '../../assets/cate-4.png'
import cate5 from '../../assets/cate-5.png'
import cate6 from '../../assets/cate-6.png'

const categories = [
    {title: 'Personal', image: cate1},
    {title: 'work', image: cate2},
    {title: 'Shopping', image: cate3},
    {title: 'Coding', image: cate4},
    {title: 'Health', image: cate5},
    {title: 'Fitness', image: cate6},
];

const Index = () => {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
    const [showAddTask, setshowAddTask] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const[taskCategory, settaskCategory] = useState('Personal');
    const [selectedCategory, setselectedCategory] = useState('All');
    const [tasktoDelete, settasktoDelete] = useState('null');
    const [showConfirmModal, setshowConfirmModal] = useState('false');

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
    }, [tasks]);

    const formatDate = (date) => {
        if(!date) return '';
        const d = new Date(date);
        return d.toLocaleDateString();
    };

    const handleAddTask = () => {
        if(!inputTask.trim()) return;
        const today = new Date();
        const newTask = {
            text: inputTask.trim(),
            category: taskCategory,
            date: today.toISOString(),
        };
        setTasks([...tasks, newTask]);

        setInputTask('');
        setshowAddTask(false);
    };

    const confirmDeleteTask = (index) => {
        settasktoDelete(index);
        
    }

  return (
    <div>Index</div>
  )
}

export default Index