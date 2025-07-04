package com.Kaushik.AI.chat;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final ChatClient chatClient;

    public ChatService(ChatClient.Builder chatBuilder){
        this.chatClient = chatBuilder.build();
    }

    public String getChatResponse(String prompt){
        return chatClient.prompt(prompt).call().content();
    }
}
