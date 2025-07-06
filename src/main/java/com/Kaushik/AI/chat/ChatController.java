package com.Kaushik.AI.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin(origins = "*") 
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/ask")
    public ResponseEntity<String> askAI(@RequestBody String prompt){
        if(prompt==null || prompt.trim().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Prompt cannot be empty.");
        }

        try{

            String aiResponse = chatService.getChatResponse(prompt);
            return ResponseEntity.ok(aiResponse);

        }catch(Exception e){

            System.err.println("Error processing chat request for prompt: \"" + prompt + "\": " + e.getMessage());
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "An error occurred while getting AI response: " + e.getMessage(),
                    e
            );

        }
    }
}
