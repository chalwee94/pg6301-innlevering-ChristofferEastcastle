export function randomQuestion() {
    return Questions[Math.trunc(Math.random()*Questions.length)];
}

export function isCorrectAnswer(id, answer) {
    return Questions.find(q => q.id === id).correct_answers[answer + "_correct"] === "true";
}


export const Questions = [
    {
        "id": 388,
        "question": "Which is the log in which data changes received from a replication master server are written?",
        "description": null,
        "answers": {
            "answer_a": "Error Log",
            "answer_b": "Relay Log",
            "answer_c": "General Query Log",
            "answer_d": "Binary Log",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Medium"
    },
    {
        "id": 913,
        "question": "Which of the following are core Kubernetes objects?",
        "description": null,
        "answers": {
            "answer_a": "Pods, Services, Volumes",
            "answer_b": "Pods, Docker, Volumes",
            "answer_c": "Pods, Services, Droplets",
            "answer_d": "None of the mentioned",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "DevOps",
        "difficulty": "Easy"
    },
    {
        "id": 908,
        "question": "__________________ is responsible for health check of the pods running on individual nodes",
        "description": null,
        "answers": {
            "answer_a": "Kubectl",
            "answer_b": "Kubelet",
            "answer_c": "Kube scheduler",
            "answer_d": "Kube controller manager",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "Docker",
        "difficulty": "Easy"
    },
    {
        "id": 527,
        "question": "HTML supports",
        "description": null,
        "answers": {
            "answer_a": "ordered lists",
            "answer_b": "unordered lists",
            "answer_c": "both type of lists",
            "answer_d": "does not support those types",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Linux",
        "difficulty": "Easy"
    },
    {
        "id": 96,
        "question": "Which of the following method can be used to close a MySql database using PHP?",
        "description": null,
        "answers": {
            "answer_a": "mysql_connect()",
            "answer_b": "mysql_close()",
            "answer_c": "mysql_query()",
            "answer_d": "None of the above",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "",
        "difficulty": "Medium"
    },
    {
        "id": 43,
        "question": "The following command can be used for turning off or restarting a Linux host.",
        "description": null,
        "answers": {
            "answer_a": "reboot",
            "answer_b": "shutdown",
            "answer_c": "exit",
            "answer_d": "taskkill",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Easy"
    },
    {
        "id": 760,
        "question": "Which of the following function is used to read the content of a file?",
        "description": null,
        "answers": {
            "answer_a": "fopen()",
            "answer_b": "fread()",
            "answer_c": "filesize()",
            "answer_d": "file_exist()",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "Once a file is opened using fopen() function it can be read with a function called fread(). This function requires two arguments. These must be the file pointer and the length of the file expressed in bytes.",
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 776,
        "question": "Which of the mentioned is not part of the so called Superglobals variables which are automatically available in every scope.",
        "description": null,
        "answers": {
            "answer_a": "$GLOBALS",
            "answer_b": "$_SERVER",
            "answer_c": "$_FILES",
            "answer_d": "$_COOKIE",
            "answer_e": "$FILES",
            "answer_f": "$COOKIE"
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "true",
            "answer_c_correct": "true",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 41,
        "question": "The partitions that are used as virtual memory when the system runs out of physical memory are known as:",
        "description": null,
        "answers": {
            "answer_a": "swap partitions",
            "answer_b": "boot partitions",
            "answer_c": "primary partitions",
            "answer_d": "extended partitions",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Medium"
    },
    {
        "id": 849,
        "question": "How to remove the docker container with container id mentioned in the command.",
        "description": null,
        "answers": {
            "answer_a": "$ docker rm -rf 9b6343d3b5a0",
            "answer_b": "$ docker -rm rf 9b6343d3b5a0",
            "answer_c": "$ docker rm 9b6343d3b5a0",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Easy"
    },
    {
        "id": 112,
        "question": "What is the difference between GET and POST method?",
        "description": null,
        "answers": {
            "answer_a": "GET displays the form values entered in the URL of the address bar where as POST does not.",
            "answer_b": "POST displays the form values entered in the URL of the address bar where as GET does not.",
            "answer_c": "There is no difference",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 178,
        "question": "Which command is used to build a Docker image?",
        "description": null,
        "answers": {
            "answer_a": "docker built username/repository_name:1.0.1",
            "answer_b": "docker image -t create username/repository_name:1.0.1",
            "answer_c": "docker build -t username/repository_name:1.0.1",
            "answer_d": "docker create username/repository_name:1.0.1",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Easy"
    },
    {
        "id": 131,
        "question": "Which character is used to indicate an end tag?",
        "description": null,
        "answers": {
            "answer_a": "/",
            "answer_b": "<",
            "answer_c": "*",
            "answer_d": "^",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 205,
        "question": "Which operator is included in the data manipulation language (DML)?",
        "description": null,
        "answers": {
            "answer_a": "INSERT",
            "answer_b": "GRANT",
            "answer_c": "CREATE",
            "answer_d": "DROP",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Medium"
    },
    {
        "id": 1080,
        "question": "Which command do we need to use if we want to see all packages installed on the system (Ubuntu)",
        "description": null,
        "answers": {
            "answer_a": "dpkg -l",
            "answer_b": "packageall -l",
            "answer_c": "dpkg -a",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Easy"
    },
    {
        "id": 864,
        "question": "How to create a volume which docker container will use to store data.",
        "description": null,
        "answers": {
            "answer_a": "$ docker --volume create",
            "answer_b": "$ docker volume create",
            "answer_c": "$ docker create volume",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Easy"
    },
    {
        "id": 124,
        "question": "Who is making the Web standards?",
        "description": null,
        "answers": {
            "answer_a": "The World Wide Web Consortium",
            "answer_b": "Google",
            "answer_c": "Mozilla",
            "answer_d": "Microsoft",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 532,
        "question": "There are ____ different heading tags in HTML",
        "description": null,
        "answers": {
            "answer_a": "4",
            "answer_b": "7",
            "answer_c": "6",
            "answer_d": "5",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 267,
        "question": "What is an action hook?",
        "description": null,
        "answers": {
            "answer_a": "A hook that is triggered at a specific time when WordPress is running and lets you take an action.",
            "answer_b": "A hook that is triggered at a specific time when WordPress is not running so it lets you take an action.",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "CMS",
        "difficulty": "Hard"
    },
    {
        "id": 517,
        "question": "Which attribute is used to name an element uniquely?",
        "description": null,
        "answers": {
            "answer_a": "class",
            "answer_b": "d",
            "answer_c": "dot",
            "answer_d": "all of above",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    }
]
