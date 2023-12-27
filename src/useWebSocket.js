import { ref, onMounted, onUnmounted } from 'vue';

export function useWebSocket(url) {
    const data = ref(null);
    const error = ref(null);
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
        data.value = event.data;
    };

    socket.onerror = (event) => {
        error.value = event;
    };

    onMounted(() => {
        socket.onopen = () => {
            console.log('WebSocket connection established');
            // Call your function here, e.g., testConnect or any other initialization logic
            socket.send('other_action:status23'); // Add this line to send the initial message
        };
        socket.onclose = () => console.log('WebSocket connection closed');
    });

    onUnmounted(() => {
        socket.close();
    });

    function send(message) {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        } else {
            console.error('WebSocket is not connected');
        }
    }

    return { data, error, send };
}