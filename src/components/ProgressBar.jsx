import "../styles/ProgressBar_styles.css"

export default function ProgressBar({completedTasks, tasks, progress}) {
    return (
        <>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="progress-text">{completedTasks} из {tasks.length} задач выполнено</p>
        </>
    )
}