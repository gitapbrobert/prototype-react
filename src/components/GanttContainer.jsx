import React, { useState, useRef, useEffect } from 'react';
import { Gantt, Toolbar } from 'svar-gantt';


const MyGanttView = () => {
    const mockData = [
        {
            id: 20,
            text: "New Task",
            start: new Date(2024, 5, 11),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 2,
            type: "task",
            lazy: false,
        },
        {
            id: 47,
            text: "[1] Master project",
            start: new Date(2024, 5, 12),
            end: new Date(2024, 7, 12),
            duration: 8,
            progress: 0,
            parent: 0,
            type: "summary",
        },
        {
            id: 22,
            text: "Task",
            start: new Date(2024, 7, 11),
            end: new Date(2024, 8, 12),
            duration: 8,
            progress: 0,
            parent: 47,
            type: "task",
        },
        {
            id: 21,
            text: "New Task 2",
            start: new Date(2024, 7, 10),
            end: new Date(2024, 8, 12),
            duration: 3,
            progress: 0,
            type: "task",
            lazy: false,
        },
    ];
    const [data, setData] = useState(mockData);
    const ganttRef = useRef(null);
    const [ganttApi, setGanttApi] = useState(null);

    useEffect(() => {
        if (ganttRef.current) {
            setGanttApi(ganttRef.current.api);
        }
    }, []);

    const handleZoomIn = () => {
        ganttApi?.zoomIn();
    };

    const handleZoomOut = () => {
        ganttApi?.zoomOut();
    };

    const handleNavigateLeft = () => {
        ganttApi?.moveTimeline(-1);
    };

    const handleNavigateRight = () => {
        ganttApi?.moveTimeline(1);
    };

    const handleAddTask = () => {
        const newTask = {
            id: Date.now(),
            name: 'New Task',
            start: new Date(),
            end: new Date(Date.now() + 24 * 60 * 60 * 1000),
        };
        setData([...data, newTask]);
    };

    const toolbarItems = [
        { comp: 'button', text: 'Zoom In', handler: handleZoomIn },
        { comp: 'button', text: 'Zoom Out', handler: handleZoomOut },
        { comp: 'separator' },
        { comp: 'button', text: '<', handler: handleNavigateLeft },
        { comp: 'button', text: '>', handler: handleNavigateRight },
        { comp: 'spacer' },
        { comp: 'button', text: 'Add Task', type: 'primary', handler: handleAddTask },
    ];

    return (
        <div>
            {ganttApi && (
                <Toolbar api={ganttApi} items={toolbarItems} />
            )}
            <div style={{ height: 500 }}>
                <Gantt ref={ganttRef} data={data} />
            </div>
        </div>
    );
};

export default MyGanttView;