package server.controller.monitoring;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.TestInstance.Lifecycle.PER_CLASS;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(HealthController.class) // only test the web layer without real web service
@TestInstance(PER_CLASS)
class HealthControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void ping() throws Exception {
        mockMvc.perform(get("/api/heath/ping"))
                .andExpect(status().is2xxSuccessful())
                .andExpect(content().string("pong"));
    }

    @Test
    void info() throws Exception {
        mockMvc.perform(get("/api/heath/info"))
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("version").exists())
        .andExpect(jsonPath("appStartTime").isNumber());
    }
}
