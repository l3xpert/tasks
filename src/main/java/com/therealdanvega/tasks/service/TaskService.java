package com.therealdanvega.tasks.service;

import com.therealdanvega.tasks.entity.Task;

/**
 * @author Philip Mark Gutierrez
 */
public interface TaskService {
    Iterable<Task> list();
}
